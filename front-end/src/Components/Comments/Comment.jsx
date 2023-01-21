import React from 'react'
import moment from 'moment/moment'
import CommentForm from './CommentForm'
import Like from './Like'
import Dislike from './Dislike'
import { useState } from 'react'
import { Avatar } from '@mui/material'

const Comment = ({
   comment,
   replies,
   currentUserId,
   activeComment,
   setActiveComment,
   addComment,
   parentComment = null,
}) => {
   const [likeComments, setLikeComments] = useState(comment)
   const canReply = Boolean(currentUserId)
   const isReplying =
      activeComment &&
      activeComment.type === 'replying' &&
      activeComment.id == comment._id

   const [commentReplies, setCommentReplies] = useState(false)

   const showCommentReplies = () => {
      setCommentReplies(!commentReplies)
   }

   //console.log('likecomments : ', likeComments)
   const replyId = parentComment ? parentComment : comment._id
   return (
      <div id={comment._id} className="comment-part-2">
         <div className="comment-user">
            <Avatar
               src={comment.userImage}
               alt="user"
               className="profile-picture"
            />
         </div>
         <div className="user-names">
            <div className="comment-time">
               <p>{comment.userName}</p>
               <p>{moment(comment.createdAt).fromNow()}</p>
            </div>
            <div>
               <p>{comment.message}</p>
               <div className="comment-mentions">
                  <Like comment={likeComments} />
                  <Dislike comment={likeComments} />
                  <div>
                     {canReply && (
                        <div
                           className="reply-button"
                           onClick={() =>
                              setActiveComment({
                                 id: comment._id,
                                 type: 'replying',
                              })
                           }
                        >
                           Reply
                        </div>
                     )}
                  </div>
               </div>
               <div className="isReplying">
                  {isReplying && (
                     <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId)}
                     />
                  )}
                  {replies.length > 0 && (
                     <div>
                        <div className="comment-replies">
                           <div className="replies">
                              <i
                                 className="fa-solid fa-square-caret-up"
                                 onClick={showCommentReplies}
                              ></i>
                           </div>
                           <div>{replies.length} replies</div>
                        </div>
                        {commentReplies && (
                           <div className="replies-section">
                              {replies.map((reply) => (
                                 <Comment
                                    comment={reply}
                                    key={reply._id}
                                    replies={[]}
                                    addComment={addComment}
                                    parentComment={comment._id}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                 />
                              ))}
                           </div>
                        )}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Comment