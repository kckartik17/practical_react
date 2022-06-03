export default (props) => (
  <div>
    <div>{props.user.name.title}</div>
    <div>{props.user.name.first}</div>
    <div>{props.user.name.last}</div>
    <div>
      <img alt="pic" src={props.user.picture.large}></img>
    </div>
  </div>
);
