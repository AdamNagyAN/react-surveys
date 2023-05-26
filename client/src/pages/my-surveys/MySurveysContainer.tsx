import { Table } from 'react-daisyui';
import GetSurveysResponseDto from '../../service/surveys/dto/GetSurveysResponseDto';
import SurveyActions from './SurveyActions';

interface MySurveysContainerProps {
  data: GetSurveysResponseDto;
}
const MySurveysContainer = ({ data }: MySurveysContainerProps) => {
  const { data: surveys } = data;
  return (
    <div className="overflow-x-auto container w-full mx-auto bg-base-300">
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
    </div>
  );
};

export default MySurveysContainer;
