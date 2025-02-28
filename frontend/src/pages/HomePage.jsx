import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import Menu from "../assets/menu.png";
import Search from "../assets/search.png";
import Ghanti from "../assets/ghanti.png";
import Profile from "../assets/profile.png";
import Email from "../assets/email.png";
import Game from "../assets/game.png";
import Cup from "../assets/cup.png";
import home from "../assets/home.png";

export default function Home() {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  const users = [
    {
      name: "John Doe",
      avatar:
        "https://tse2.mm.bing.net/th?id=OIP.prdd5O2Hrd2e0oj2ze1ZYAHaE3&pid=Api&P=0&h=180",
    },
    {
      name: "Jane Smith",
      avatar:
        "https://tse2.mm.bing.net/th?id=OIP.prdd5O2Hrd2e0oj2ze1ZYAHaE3&pid=Api&P=0&h=180",
    },
    {
      name: "Alice Brown",
      avatar:
        "https://tse2.mm.bing.net/th?id=OIP.prdd5O2Hrd2e0oj2ze1ZYAHaE3&pid=Api&P=0&h=180",
    },
  ];

  const imageUrl =
    "https://tse2.mm.bing.net/th?id=OIP.prdd5O2Hrd2e0oj2ze1ZYAHaE3&pid=Api&P=0&h=180";
  const likes = "fireman997, donny90 + 999,999 others";
  const comments = "999,999";
  const time = "15 hours";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-20 pb-20">
      <div className="fixed top-0 w-full max-w-md flex justify-between p-4 border-b rounded-b-3xl bg-gray-900 border-t border-gray-700 z-10">
        <button className="text-white">
          <img src={Menu} alt="Menu" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={Search} alt="Search" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={Ghanti} alt="Notifications" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={Profile} alt="Profile" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={Email} alt="Email" className="h-6 w-6" />
        </button>
      </div>
      {users.map((user, index) => (
        <div key={index} className="w-full max-w-md mb-6">
          <div className="w-full p-4 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-semibold">{user.name}</span>
            </div>
            <button className="text-gray-400">•••</button>
          </div>
          <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Post"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="w-full flex justify-between px-4 py-2">
            <div className="flex space-x-3">
              <button onClick={toggleLike} className="text-white">
                <Heart
                  className={`h-6 w-6 ${liked ? "text-red-500" : "text-white"}`}
                />
              </button>
              <button className="text-white">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="text-white">
                <Send className="h-6 w-6" />
              </button>
            </div>
            <button className="text-white">
              <Bookmark className="h-6 w-6" />
            </button>
          </div>
          <div className="w-full px-4">
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Liked by {likes}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              View {comments} comments
            </p>
            <p className="text-xs text-gray-600 mt-1">{time} ago</p>
          </div>
        </div>
      ))}
      <div className="fixed bottom-0 w-full max-w-md flex justify-between px-6 py-4 rounded-t-3xl bg-gray-900 border-t border-gray-700 z-10">
        <button className="text-white">
          <img src={Game} alt="Game" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={home} alt="Home" className="h-6 w-6" />
        </button>
        <button className="text-white">
          <img src={Cup} alt="Cup" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}