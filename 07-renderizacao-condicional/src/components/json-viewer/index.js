import ReactJson from 'react-json-view';
import styled from 'styled-components';

const JsonViewerContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    border: 1px solid black;
    text-align: left;
    width: 20vw;
`;

export const JsonViewer = ({ src, onEdit}) => {
    return (
        <JsonViewerContainer >
        <ReactJson 
            src={src} 
            theme="apathy:inverted" 
            displayDataTypes={false} 
            displayObjectSize={false}
            onEdit={onEdit}
        />
        </JsonViewerContainer>
    )
}