import styled from "styled-components"
import history from '../../spinHistory'

function SpinHistory() {
    return (
        <StyledSpinHistory>
            <div className="q">
                {history.map((e) => (
                    <div className="history-block">
                        <div className="bg-gradient-var history" data-double-type={e.color}></div>
                    </div>
                ))}
                <div className="bg-gradient-var blackout"></div>
            </div>
        </StyledSpinHistory>
    )
}

const StyledSpinHistory = styled.div`

    border-radius: 0;
    min-width: 100%;
    width: auto;
    margin-right: -1.25rem;
    top: .375rem;
    position: relative;
    overflow: hidden;
    height: .75rem;
    right: 0;

    .q{
        overflow: auto;
        display: flex;

    }

    .history-block{
        width: 1.4375rem;
        opacity: 1;
        flex-shrink: 0;
        overflow: hidden;
    }

    .history{
        width: 1.25rem;
        height: .75rem;
        border-radius: .3125rem;
        flex-shrink: 0;
    }
        
    .blackout{
        --to: transparent;
        --from: #222a44;
        --angle: 270deg;
        width: 6rem;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
    }

`

export default SpinHistory