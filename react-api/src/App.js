import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';




function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(result.data);
      setLoading(false);
    }
    fetchPosts();
  }, [loading])
  if (loading === true) {
    return (
      <>
        <section>
          loading.....
        </section>
      </>
    )
  }
  return (
    <>
      {
        posts.map((post) => (
          <div key={post.id}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer text-muted">
                2 days ago
              </div>
            </div>
            <br></br>
          </div>
        ))}





    </>
  );
}

export default App;
