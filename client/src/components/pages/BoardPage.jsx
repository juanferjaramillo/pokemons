import ActionBar from '../actionBar/ActionBar';
import Board from '../board/Board';
import FooterBar from '../footerBar/FooterBar';
import NavBar from '../navBar/NavBar';

function BoardPage() {
    return(
        <>
        <NavBar />
        <ActionBar />
        <Board />
        <FooterBar />
        </>
    )
}
export default BoardPage;