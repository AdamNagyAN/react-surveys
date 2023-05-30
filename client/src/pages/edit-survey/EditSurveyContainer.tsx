import { Button } from 'react-daisyui';
import { Controller, useForm } from 'react-hook-form';
import { editSurveySchema, EditSurveyValues } from './EditSurvey.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../../components/molecules/TextArea';
import useCreateSurvey from '../../query/surveys/useCreateSurvey';
import { useToastBar } from '../../components/molecules/toast/ToastBarProvider';

const EditSurveyContainer = () => {
  const { mutateAsync: createSurvey, isLoading: isCreateLoading } =
    useCreateSurvey();
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
  });

  const onSubmit = async (data: EditSurveyValues) => {
    const splitContent = data.content.split('\n\n');
    const name = splitContent[0];
    const content = splitContent.slice(1).join('\n\n');
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
  };

  return (
    <div className="text-center container mx-auto mt-4">
      <h2>Create survey</h2>
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
        <Button loading={isCreateLoading}>Create</Button>
      </form>
    </div>
  );
};

export default EditSurveyContainer;
