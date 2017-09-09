import {VoteComponent} from './vote.component';

describe('VoteComponent Suite', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();

  });

  it('should upvote component', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should downvote component', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
