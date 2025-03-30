import { useState } from 'react';
import { useEffect } from 'react';
import { Thread } from './Thread';
import CThread from './Thread';

function Threads(
    { threads, setThreads } : { threads: Thread[]; setThreads: React.Dispatch<React.SetStateAction<Thread[]>>; }
){
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        addThreads({offset, setOffset});
    }, []);

    async function addThreads({offset, setOffset}: {offset: number; setOffset: React.Dispatch<React.SetStateAction<number>>}) {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`);
        const data: Thread[] = await response.json();
        setThreads(prevThreads => [...prevThreads, ...data]);
        setOffset(prevOffset => prevOffset + 10);
    }

    return (
        <div>
            
            {threads.map((thread) => (
                <CThread thread={thread}/>
            ))}
            
            <button 
                onClick={() => addThreads({offset, setOffset})}
                style={{
                    fontSize: '24px',
                    padding: '8px 16px',
                    margin: '16px 0',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                もっと見る
            </button>
        </div>
    );
}

export default Threads;
