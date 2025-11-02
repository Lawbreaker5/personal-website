import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

// 作品1组件
function Project1() {
  return (
    <div>
      <h3>作品1</h3>
      {/* 这里添加作品1的具体内容 */}
    </div>
  )
}

// 作品2组件
function Project2() {
  return (
    <div>
      <h3>作品2</h3>

       <Link to="/portfolio/project2/project2_1">
       <button>
       看作品2_1
       </button>      
       </Link>

      <Link to="/portfolio/project2/project2_2">
      <button>
       看作品2_2
       </button>
      </Link> 

      {/* 这里添加作品2的具体内容 */}
      <Routes>
        <Route path="project2_1" element={<Project2_1 />} />
        <Route path="project2_2" element={<Project2_2 />} />
        <Route index element={<Project2_1 />} />
      </Routes>
    </div>
  )
}

// 作品2_1组件
function Project2_1() {
  return (
    <div>
      <h3>作品2_1</h3>
      {/* 这里添加作品2的具体内容 */}
    </div>
  )
}
// 作品2_2组件
function Project2_2() {
  return (
    <div>
      <h3>作品2_2</h3>
      {/* 这里添加作品2的具体内容 */}
    </div>
  )
}

// 作品展示组件
function Portfolio() {
  return (
    <div>
      <h2>作品展示</h2>
      <nav style={{
        backgroundColor: '#edf2f7',
        padding: '0.5rem',
        marginBottom: '1rem',
        borderRadius: '4px'
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link to="/portfolio/project1" style={{
              textDecoration: 'none',
              color: '#2d3748',
              fontSize: '1rem'
            }}>作品1</Link>
          </li>
          <li>
            <Link to="/portfolio/project2" style={{
              textDecoration: 'none',
              color: '#2d3748',
              fontSize: '1rem'
            }}>作品2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/project1/*" element={<Project1 />} />
        <Route path="/project2/*" element={<Project2 />} />
        <Route index element={<Project1 />} />
      </Routes>
    </div>
  )
}

// 简历组件
function Resume() {
  return (
    <div>
      <h2>简历</h2>
      {/* 这里添加简历的内容 */}
    </div>
  )
}

function App() {
  const [abc, setAbc] = useState(123);
  const [def, setDef] = useState(456);

  useEffect(() => {
    console.log('abc or def changed:', abc, def);
  }, [abc, def]);

  return (
    <Router>
      <div>
        {/* ABC计数器按钮 */}
        <button 
          onClick={() => setAbc(abc + 1)}
          style={{
            padding: '8px 16px',
            margin: '10px',
            backgroundColor: '#385139ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }} 
        >
          ABC当前值: {abc}
        </button>

        {/* 导航栏 */}
        <nav style={{
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link to="/portfolio" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1.1rem'
              }}>作品展示</Link>
            </li>
            <li>
              <Link to="/resume" style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1.1rem'
              }}>简历</Link>
            </li>
          </ul>
        </nav>

        {/* 路由配置 */}
        <Routes>
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Portfolio />} /> {/* 默认路由 */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
