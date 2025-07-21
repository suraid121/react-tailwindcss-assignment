import { useState, useEffect, useRef } from 'react';
import cn from '../utilities/cn.js';

const ChatBox = ({
  mode = 'compact',
  height = 'max-h-80',
  width = 'w-[340px]',
  position = 'fixed bottom-[120px] right-8',
}) => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: input, sender: 'user' },
      {
        text: 'This is not connected to the backend. Contact tonoyofficial121@gmail.com or 01870049584.',
        sender: 'bot',
      },
    ]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Open Button (Compact Mode Only) */}
      {!visible && mode === 'compact' && (
        <button
          onClick={() => setVisible(true)}
          className="fixed bottom-8 right-8 bg-orange-500 p-4 rounded-full shadow-lg z-40"
        >
          <img src="/C.svg" alt="Open Chat" className="w-6 h-6" />
        </button>
      )}

      {/* Close Button (Compact Mode Only) */}
      {visible && mode === 'compact' && (
        <button
          onClick={() => setVisible(false)}
          className="fixed bottom-[50px] right-8 bg-light-gray-bg p-4 rounded-full z-50 drop-shadow-xl/50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-7 h-7 text-cross-icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Chat Panel */}
      <div
        className={cn(
          mode === 'full' ? 'fixed inset-0 w-full h-full rounded-none' : `${position} ${width}`,
          'z-50 transition-all duration-300 ease-in-out transform',
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        )}
      >
        <div className="bg-white drop-shadow-2xl rounded-xl overflow-hidden text-sm flex flex-col h-full">
          {/* Header */}
          <div className="bg-orange-primary p-4 flex justify-between items-center">
            <span className="text-white text-base font-semibold">Chat with Cypher</span>
            {mode === 'full' && (
              <button
                onClick={() => setVisible(false)}
                className="text-white hover:scale-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Messages */}
          <div className={cn('flex flex-col gap-2 px-3 py-2 overflow-y-auto bg-[#E5E7EB] flex-1', height)}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  'px-4 py-2 mb-3 rounded-xl max-w-[85%]',
                  msg.sender === 'bot'
                    ? 'bg-dark-gray-bg text-white self-start'
                    : 'bg-transparent text-gray-700 border border-gray-300 self-end'
                )}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-2 bg-[#E5E7EB] text-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your question..."
              className="w-full px-4 py-2.5 mb-3 rounded-md focus:outline-none text-xs border border-gray-400"
            />
            <div className="flex items-center">
              <div className="flex items-center gap-1.5 flex-1">
                <img src="/camera.svg" alt="camera" className="cursor-pointer hover:scale-110 transition-all" />
                <img src="/file.svg" alt="file" className="cursor-pointer hover:scale-110 transition-all" />
                <img src="/clip.svg" alt="clip" className="cursor-pointer hover:scale-110 transition-all" />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-5 py-1 text-base rounded-full hover:ring-amber-600 hover:ring-2 ring-offset-1 transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
