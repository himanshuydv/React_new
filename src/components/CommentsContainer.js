import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [
      {
        name: "Himanshu Yadav",
        text: "This video is amazing",
        replies: [
          {
            name: "Himanshu Yadav",
            text: "This video is amazing",
            replies: [
              {
                name: "Himanshu Yadav",
                text: "This video is amazing",
                replies: [
                  {
                    name: "Himanshu Yadav",
                    text: "This video is amazing",
                    replies: [
                      {
                        name: "Himanshu Yadav",
                        text: "This video is amazing",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
  {
    name: "Himanshu Yadav",
    text: "This video is amazing",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="mx-5 px-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
