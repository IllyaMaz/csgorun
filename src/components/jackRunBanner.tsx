import styled from "styled-components"

function JackRunBanner(
    {
        color, 
        picture, 
        bg,
        content
    }: {
        color: string, 
        picture: string, 
        bg: string,
        content: string
    }) {
    return (
        <StyledJackRunBanner color={color} picture={picture} bg={bg}>
            <div className="icon picture"></div>
            <span className="content">{content}</span>
        </StyledJackRunBanner>
    )
}

const StyledJackRunBanner = styled.div<{color: string, picture: string, bg: string}>`
    font-weight: 700;
    padding-left: .75rem;
    padding-right: .75rem;
    background-color: ${(props) => props.bg};
    border: 1px dashed #4c4459;
    border-radius: .75rem;
    display: flex;
    height: 3rem;
    align-items: center;
    color: ${(props) => props.color};

    .picture{
        mask-image: url(${(props) => props.picture});
        width: 1.25rem;
    }

    .content{
        margin-left: auto;
        margin-right: auto;
    }
`

export default JackRunBanner