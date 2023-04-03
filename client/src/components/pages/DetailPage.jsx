import Detail from "../detail/Detail";
import NavBar from "../navBar/NavBar";

function DetailPage() {
  console.log("En DetailPage");
  return (
    <>
      <NavBar />
      <Detail id={3} />
    </>
  );
}
export default DetailPage;
