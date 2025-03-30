import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThreadNew.css';

export function ThreadNew() {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
            const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
        
            if (response.ok) {
                // 成功時は一覧ページにリダイレクト
                navigate('/');
            } else {
                console.error('スレッドの作成に失敗しました');
            }
        } catch (error) {
        console.error('エラーが発生しました:', error);
        }
    };

    return (
        <div className="container">
            <h2>新規スレッド作成</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">タイトル:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">作成</button>
            </form>
        </div>
    );
}
