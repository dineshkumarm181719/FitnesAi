'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Sparkles, Bot, User } from 'lucide-react';
import { Card, Button } from '@/components/ui';
import { QUICK_CHAT_PROMPTS } from '@/lib/constants';
import { generateId } from '@/lib/utils';

const DEMO_RESPONSES = {
  diet: "Here are some diet tips:\n\n1. **Eat protein-rich breakfast** — eggs, Greek yogurt, or oatmeal\n2. **Stay hydrated** — drink at least 8 glasses of water daily\n3. **Control portions** — use smaller plates\n4. **Eat more fiber** — vegetables, fruits, whole grains\n5. **Avoid processed foods** — cook fresh meals when possible",
  workout: "Here's a quick 15-minute workout:\n\n🔥 **Circuit (3 rounds)**\n- 15 Jumping Jacks\n- 10 Push-ups\n- 15 Squats\n- 10 Lunges (each leg)\n- 30s Plank\n- 30s Rest between rounds\n\nThis burns approximately 150-200 calories!",
  metabolism: "To boost your metabolism:\n\n1. **Build muscle** — muscle burns more calories at rest\n2. **Eat enough protein** — thermic effect increases calorie burn\n3. **Drink cold water** — temporarily boosts metabolism\n4. **HIIT workouts** — afterburn effect lasts hours\n5. **Sleep 7-9 hours** — poor sleep slows metabolism\n6. **Don't skip meals** — eat consistently throughout the day",
  default: "Great question! Here's what I recommend:\n\n✅ Stay consistent with your workouts\n✅ Track your meals and calories\n✅ Get adequate sleep (7-9 hours)\n✅ Stay hydrated throughout the day\n✅ Listen to your body and rest when needed\n\nWould you like more specific advice on diet, workouts, or recovery?",
};

function getAIResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('diet') || lower.includes('meal') || lower.includes('food') || lower.includes('snack') || lower.includes('eat')) return DEMO_RESPONSES.diet;
  if (lower.includes('workout') || lower.includes('exercise') || lower.includes('train')) return DEMO_RESPONSES.workout;
  if (lower.includes('metabol') || lower.includes('burn') || lower.includes('boost')) return DEMO_RESPONSES.metabolism;
  return DEMO_RESPONSES.default;
}

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: '1', role: 'ai', content: "Hi! I'm your FitGenie AI assistant 🤖\n\nI can help you with:\n- 🥗 Diet & nutrition tips\n- 🏋️ Workout advice\n- 💪 Motivation\n- 📊 Health guidance\n\nWhat would you like to know?" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setInput('');

    const userMsg = { id: generateId(), role: 'user', content: msg };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: msg }) });
      const data = await res.json();
      setMessages(prev => [...prev, { id: generateId(), role: 'ai', content: data.response || getAIResponse(msg) }]);
    } catch {
      // Fallback to demo response
      await new Promise(r => setTimeout(r, 800));
      setMessages(prev => [...prev, { id: generateId(), role: 'ai', content: getAIResponse(msg) }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col animate-fade-in">
      <div className="mb-4">
        <h1 className="text-2xl font-black flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
            <MessageCircle size={20} className="text-white" />
          </div>
          AI Chat Assistant
        </h1>
        <p className="text-sm text-muted mt-1">Get instant fitness advice from your AI coach</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden p-0">
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 hide-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'gradient-primary' : 'gradient-cool'}`}>
                {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
              </div>
              <div className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full gradient-cool flex items-center justify-center flex-shrink-0">
                <Bot size={14} className="text-white" />
              </div>
              <div className="chat-bubble-ai px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="px-6 py-3 border-t border-border">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {QUICK_CHAT_PROMPTS.map((p, i) => (
              <button key={i} onClick={() => sendMessage(p)} className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-muted hover:border-primary hover:text-primary transition-all cursor-pointer">
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about fitness..."
              className="flex-1 px-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={loading}
            />
            <Button onClick={() => sendMessage()} disabled={!input.trim() || loading} className="px-4">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
