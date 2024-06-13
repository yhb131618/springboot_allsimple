import React, { useState } from 'react';
import useProjectStore from './useProjectStore';

function NewCommentForm({ onAddComment }) {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddComment(author, content);
      setAuthor("");
      setContent("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={author}
          placeholder="프로젝트"
          onChange={e => setAuthor(e.target.value)}
          required
        />
        <input
          value={content}
          placeholder="댓글 내용"
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">프로젝트 추가</button>
      </form>
    );
  }

  

const Comment = ({ comment }) => {
  
    const [replies, setReplies] = useState(comment.replies || []);

  const handleAddcomment = (text) => {
    const newReply = {
      id: Date.now(), // 유니크 ID 생성
      text: text,
      time: new Date().toISOString(),
      parentId: "1",
      replies: []
    };
    setReplies([...replies, newReply]);
    console.log(replies);
  };

  return (
    <div>
        <div style={{ marginLeft: comment.parentId ? 100 : 0 }}>
        <div>
            {comment.parentId && comment.subject} {comment.parentId && ' | '}
            {comment.parentId && comment.id} {comment.parentId && ' | '}  
  
        </div>
        {replies.map(reply => (
            <Comment key={reply.id} comment={reply} />
        ))}
        </div>
        <div>
            {!comment.parentId && 
                <button onClick={() => handleAddcomment(null)}>추가</button> 
            }
            {!comment.parentId && " | "}
            {!comment.parentId && 
            <button onClick={() => handleAddcomment(comment)}>삭제</button>
            }
        </div>
    </div>
  );
};

const ProgressUnit = ({ comments }) => {
    const [commentss, setComments] = useState(comments);

    const addComment = (author, content) => {
        const newComment = {
          id: Date.now(),
          author: author,
          content: content,
          timestamp: new Date().toISOString(),
          parentId: null,
          depth: 0,
          replies: []
        };
        setComments([...commentss, newComment]);
      };
      const { addProject, projects } = useProjectStore();

      const handleAddProject = () => {
        addProject({ id: Date.now(), name: 'New Project', subSections: [] });
      };
    
  return (
    <div>
 
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
          <NewCommentForm onAddComment={addComment} />

          <button onClick={handleAddProject}>Add Project</button>
      {projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default ProgressUnit;
