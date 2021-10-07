import ReactJson from 'react-json-view';

export const JsonViewer = ({ src, onEdit, component, ...props }) => {
    return (
        <ReactJson 
            src={src} 
            name={component}
            theme="apathy:inverted" 
            displayDataTypes={false} 
            displayObjectSize={false}
            onEdit={onEdit}
            quotesOnKeys={false}
            {...props}
        />
    )
}