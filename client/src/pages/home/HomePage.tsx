import AppBar from '../../components/organisms/appbar/AppBar';

const HomePage = () => {
  return (
    <>
      <AppBar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-4">
          Welcome to the application that allows you to easily create and manage
          multi-step questionnaires!
        </h1>
        <p className="my-2">
          With this application, you can effortlessly create, edit, and share
          questionnaires, as well as view the responses they receive. The
          application is entirely web-based, and we ensure the secure handling
          of user data. Register or log in now and start harnessing the power of
          questionnaires!
        </p>
        <h2 className="text-xl font-medium mt-4 mb-2">Functions:</h2>
        <ul className="list-disc">
          <li>
            Creating Questionnaires: The application enables users to easily
            create multi-step questionnaires. Users can assemble questions and
            answer options, and set the title of the questionnaire. The
            questions expect simple text-based responses.
          </li>
          <li>
            Managing Questionnaires: The created questionnaires can be
            efficiently managed through a tabular view. Users have the option to
            modify, delete, and share questionnaires. During modification,
            questions or answer options can be updated.
          </li>
          <li>
            Sharing Questionnaires: Questionnaires can be easily shared with
            other users or groups through unique links. Each questionnaire is
            assigned a unique identifier (hash) tied to the logged-in user,
            facilitating convenient sharing.
          </li>
          <li>
            Filling out Questionnaires: Shared questionnaires can be accessed
            and filled out by anyone using the unique links. Responses can be
            submitted and recorded.
          </li>
          <li>
            Viewing Responses: The application provides a separate interface for
            users to view the responses received for their questionnaires. Users
            can review the responses, perform analysis, and export the data in
            various formats if needed.
          </li>
          <li>
            Managing User Profile: Users have the ability to manage their
            profile, update personal information, and customize settings.
          </li>
          <li>
            Registration and Login: The application allows users to register and
            log in. During registration, users need to provide their full name,
            email address, and password. Logged-in users gain full access to the
            application&apos;s functionalities.
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
