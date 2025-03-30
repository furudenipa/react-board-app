type Thread = {
    id: string;
    title: string;
}

function CThread({ thread }: { thread: Thread }) {
    return (
        <div style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
            <h2 style={{ margin: '0 0 8px' }}>{thread.title}</h2>
            <p style={{ margin: '0' }}>ID: {thread.id}</p>
        </div>
    )
}

export default CThread;
export type { Thread };