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

interface SurveyActionsProps {
  survey: SurveyDto;
}
const SurveyActions = ({ survey }: SurveyActionsProps) => {
  const { id } = survey;
  const toastBar = useToastBar();
  const { mutateAsync: deleteSurvey, isLoading: isDeleteLoading } =
    useDeleteSurvey();
  const surveyUrl = new URL(
    ROUTES.MODIFY_SURVEY(id),
    window.location.origin
  ).toString();

  console.log({ surveyUrl });

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

  // TODO: more actions

  return (
    <>
      <Button shape="circle">
        <ChatBubbleBottomCenterTextIcon />
      </Button>
      <CopyToClipboard text={surveyUrl} onCopy={onCopy}>
        <Button shape="circle">
          <ClipboardIcon />
        </Button>
      </CopyToClipboard>
      <Button shape="circle" color="info">
        <PencilIcon />
      </Button>
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
