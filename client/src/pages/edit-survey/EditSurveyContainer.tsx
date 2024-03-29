import { Button } from 'react-daisyui';
import { Controller, useForm } from 'react-hook-form';
import { editSurveySchema, EditSurveyValues } from './EditSurvey.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../../components/molecules/TextArea';
import useCreateSurvey from '../../query/surveys/useCreateSurvey';
import { useToastBar } from '../../components/molecules/toast/ToastBarProvider';
import useModifySurvey from '../../query/surveys/useModifySurvey';
import SurveyDto from '../../service/surveys/dto/SurveyDto';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes';

interface EditSurveyContainerProps {
  id?: number;
  data?: SurveyDto;
}
const EditSurveyContainer = ({ id, data }: EditSurveyContainerProps) => {
  const isNewSurvey = !Number.isInteger(id);
  const navigate = useNavigate();
  const { mutateAsync: createSurvey, isLoading: isCreateLoading } =
    useCreateSurvey();
  const { mutateAsync: modifySurvey, isLoading: isModifyLoading } =
    useModifySurvey(id ?? -1);
  const toastBar = useToastBar();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<EditSurveyValues>({
    resolver: yupResolver(editSurveySchema()),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      content:
        !isNewSurvey && data ? [data.name, data.content].join('\n\n') : '',
    },
  });

  const onSubmit = async (data: EditSurveyValues) => {
    const splitContent = data.content.split('\n\n');
    const name = splitContent[0];
    const content = splitContent.slice(1).join('\n\n');
    if (isNewSurvey) {
      await createSurvey({
        name,
        content,
      });
      reset();
      toastBar({
        type: 'success',
        message: 'Survey created successfully',
        title: 'Success',
      });
    } else {
      await modifySurvey({
        name,
        content,
      });
      navigate(ROUTES.MY_SURVEYS);
      toastBar({
        type: 'success',
        message: 'Survey modified successfully',
        title: 'Success',
      });
    }
  };

  return (
    <div className="text-center container mx-auto mt-4">
      <h2>{isNewSurvey ? 'Create survey' : 'Modify survey'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextArea
              className="w-full min-h-[500px] bg-base-300"
              {...field}
              value={field.value || ''}
              errorText={errors.content?.message}
            />
          )}
        />
        {isNewSurvey ? (
          <Button loading={isCreateLoading}>Create</Button>
        ) : (
          <Button loading={isModifyLoading}>Modify</Button>
        )}
      </form>
    </div>
  );
};

export default EditSurveyContainer;
