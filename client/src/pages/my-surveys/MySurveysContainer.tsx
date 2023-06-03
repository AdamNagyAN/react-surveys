import { Button, Pagination, Table } from 'react-daisyui';
import GetSurveysResponseDto from '../../service/surveys/dto/GetSurveysResponseDto';
import SurveyActions from './SurveyActions';
import { PAGE_SIZE } from './MySurveysPage';

interface MySurveysContainerProps {
  data: GetSurveysResponseDto;
  page: number;
  setPage: (page: number) => void;
}
const MySurveysContainer = ({
  data,
  page,
  setPage,
}: MySurveysContainerProps) => {
  const { data: surveys } = data;
  return (
    <div className="container w-full mx-auto flex flex-col">
      <Table className="w-full text-center">
        <Table.Head>
          <span>#</span>
          <span>Name</span>
          <span>Creation Date</span>
          <span>Action</span>
        </Table.Head>
        <Table.Body>
          {surveys.map((survey) => (
            <Table.Row key={survey.id}>
              <span>{survey.id}</span>
              <span>{survey.name}</span>
              <span>{new Date(survey.createdAt).toLocaleString()}</span>
              <div className="flex gap-2 w-full justify-center">
                <SurveyActions survey={survey} />
              </div>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="mx-auto">
        <Pagination>
          {Array.from(Array(Math.ceil(data.total / PAGE_SIZE)).keys()).map(
            (value) => (
              <Button
                key={value}
                active={page === value}
                onClick={() => {
                  setPage(value);
                }}
              >
                {value + 1}
              </Button>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default MySurveysContainer;
