import CreateForm from "../createFrom/CreateForm";
import Detail from "../detail/Detail";
import NavBar from "../navBar/NavBar";

function CreatePage() {
  console.log("En DeatilPage");
  return (
    <>
      <NavBar />
      <CreateForm />
    </>
  );
}
export default CreatePage;
