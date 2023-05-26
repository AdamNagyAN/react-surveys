import { Table } from 'react-daisyui';
import GetSurveysResponseDto from '../../service/surveys/dto/GetSurveysResponseDto';

interface MySurveysContainerProps {
  data: GetSurveysResponseDto;
}
const MySurveysContainer = ({ data }: MySurveysContainerProps) => {
  const { data: surveys } = data;
  return (
    <div className="overflow-x-auto container w-full mx-auto bg-base-300">
      <Table className="w-full">
        <Table.Head>
          <span>#</span>
          <span>Name</span>
          <span>Creation Date</span>
          <span>Action</span>
        </Table.Head>
        <Table.Body>
          {surveys.map((survey, index) => (
            <Table.Row key={survey.id}>
              <span>{index}</span>
              <span>{survey.name}</span>
              <span>{new Date(survey.createdAt).toLocaleString()}</span>
              <span>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MySurveysContainer;
