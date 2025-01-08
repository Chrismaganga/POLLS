import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from 'react-redux';
import { Question, User } from '@/types';
import { RootState } from '@/store';

type PublicUser = Omit<User, 'password'>;

interface PollProps {
  id: string;
  selectedOption: string;
  canVote: boolean;
  onVote: (option: string) => void;
  poll: Question;
}

const Poll: React.FC<PollProps> = ({ id, selectedOption, canVote, onVote, poll }) => {
  const users = useSelector((state: RootState) => state.users.users);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const author: PublicUser | undefined = users[poll.author];

  const hasVoted = currentUser && (
    poll.optionOne.votes.includes(currentUser.id) ||
    poll.optionTwo.votes.includes(currentUser.id)
  );

  const totalVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length;
  const optionOnePercent = totalVotes === 0 ? 0 : 
    Math.round((poll.optionOne.votes.length / totalVotes) * 100);
  const optionTwoPercent = totalVotes === 0 ? 0 : 
    Math.round((poll.optionTwo.votes.length / totalVotes) * 100);

  return (
    <div className="poll-container">
      <div className="poll-header">
        <img 
          src={author?.avatarURL} 
          alt={`Avatar of ${author?.name}`} 
          className="author-avatar"
        />
        <div className="author-info">
          <h3>{author?.name}</h3>
          <p className="timestamp">
            {new Date(poll.timestamp).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="poll-content">
        <h4>Would you rather...</h4>
        <div className={`poll-options ${hasVoted ? 'voted' : ''}`}>
          <div className="option">
            <p>{poll.optionOne.text}</p>
            {hasVoted && (
              <div className="vote-info">
                <div className="vote-bar" style={{ width: `${optionOnePercent}%` }} />
                <span>{optionOnePercent}% ({poll.optionOne.votes.length} votes)</span>
              </div>
            )}
          </div>
          <div className="option">
            <p>{poll.optionTwo.text}</p>
            {hasVoted && (
              <div className="vote-info">
                <div className="vote-bar" style={{ width: `${optionTwoPercent}%` }} />
                <span>{optionTwoPercent}% ({poll.optionTwo.votes.length} votes)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <Link to={`/questions/${poll.id}`} className="view-poll-button">
        View Poll
      </Link>
    </div>
  );
};

export default Poll;