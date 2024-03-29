import { Button } from 'react-daisyui';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  ChatBubbleBottomCenterTextIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { ClipboardIcon } from '@heroicons/react/24/solid';
import useDeleteSurvey from '../../query/surveys/useDeleteSurvey';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import { ROUTES } from '../../Routes';
import { useToastBar } from '../../components/molecules/toast/ToastBarProvider';
import { Link } from 'react-router-dom';

interface SurveyActionsProps {
  survey: SurveyDto;
}
const SurveyActions = ({ survey }: SurveyActionsProps) => {
  const { id, hash } = survey;
  const toastBar = useToastBar();
  const { mutateAsync: deleteSurvey, isLoading: isDeleteLoading } =
    useDeleteSurvey();
  const surveyUrl = new URL(
    ROUTES.SURVEY(hash),
    window.location.origin
  ).toString();

  const onCopy = () => {
    toastBar({
      type: 'success',
      title: 'Success',
      message: 'Copied to clipboard',
    });
  };
  const onDelete = async () => {
    await deleteSurvey({
      id,
    });
  };

  return (
    <>
      <Link to={ROUTES.ANSWERS(survey.id)} className="btn btn-circle">
        <ChatBubbleBottomCenterTextIcon />
      </Link>
      <CopyToClipboard text={surveyUrl} onCopy={onCopy}>
        <Button shape="circle">
          <ClipboardIcon />
        </Button>
      </CopyToClipboard>
      <Link
        className="btn btn-circle btn-info"
        to={ROUTES.MODIFY_SURVEY(survey.id)}
      >
        <PencilIcon />
      </Link>
      <Button
        onClick={onDelete}
        loading={isDeleteLoading}
        shape="circle"
        color="error"
      >
        <TrashIcon />
      </Button>
    </>
  );
};

export default SurveyActions;
