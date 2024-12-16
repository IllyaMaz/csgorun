import styled from "styled-components"
import SmallCard from "./smallCard"
import botgame from '../img/botgame-preview-sm.avif'
import cases from '../img/cases-preview-sm.avif'
import crash from '../img/crash-preview-sm.avif'
import double from '../img/double-preview-sm.avif'
import jackrun from '../img/jackrun-preview-sm.avif'
import rollrun from '../img/roolrun-preview-sm.avif'
import { useNavigate } from "react-router"


function HeaderCard() {

    const navigation = useNavigate()

    const navigate = (path: string) => {
        navigation(path)
    }

    return (
        <StyledHeaderCard>
            <SmallCard onClick={() => navigate('/crash')} name={'CRASH'} picture={crash} />
            <SmallCard onClick={() => navigate('/double')} name={'DOUBLE'} picture={double} />
            <SmallCard onClick={() => navigate('/jackrun')} name={'JACKRUN'} picture={jackrun} />
            <SmallCard onClick={() => navigate('/rollrun')} name={'ROLLRUN'} picture={rollrun} />
            <SmallCard onClick={() => navigate('/cases')} name={'CASES'} picture={cases} />
            <SmallCard onClick={() => navigate('/casebatle')} name={'CASEBATLE'} picture={botgame} />
        </StyledHeaderCard>
    )
}

const StyledHeaderCard = styled.section`

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    margin-bottom: 20px;

`

export default HeaderCard