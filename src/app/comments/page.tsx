import { Metadata } from "next";
import CommentsList from "../../modules/comments/components/comments-list";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: 'Comments List',
  description: 'This is comments list with my Project',
}
const Comment = async () => {
  return (
    <>
      <CommentsList />;
    </>
  );
};
export default Comment;

// export default function Page() {
//   const headersList = headers()
//   const referer = headersList.get('referer')

//   return <div>Referer: {referer}</div>
// }
