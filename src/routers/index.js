import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import { withRouter } from 'react-router';

// import Login from './../containers/Login';
// import TopicDetail from './../containers/TopicDetail';
// import UserInfo from './../containers/UserInfo';
// import NoMatch from './../components/NoMatch';
// import Register from './../containers/Register';
// import CreateTopic from './../containers/CreateTopic';
// import Message from './../containers/Message';
// import Setting from './../containers/Settings';

import Forum from '../pages/forum';
import News from '../pages/news';
import NavBar from '../nav';
import IndustryTopicList from '../pages/industryTopicList';
import TopicPostList from '../pages/topicPostList';
import PostThread from '../components/PostThread';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="topNews" element={<News />} />
        <Route exact path="forum" element={<Forum />} />
        <Route exact path="forum/:industryId" element={<IndustryTopicList />} />
        <Route exact path="forum/:industryId/:topic" element={<TopicPostList />} />
        <Route exact path="forum/:industryId/:topic/:postId" element={<PostThread />} />
      </Route>
      {/* <Route path="/topics/:id" component={TopicDetail}/>
      <Route path="/user-info/:loginname" component={UserInfo}/>
      <AuthRoute path='/message' component={Message}/>
      <PrivateRoute path="/login" component={Login}/>
      <PrivateRoute path="/register" component={Register}/>
      <AuthRoute path='/create-topic' component={CreateTopic}/>
      <AuthRoute path='/edit-topic/:topicId' component={CreateTopic}/>
      <AuthRoute path='/setting' component={Setting}></AuthRoute>
      <Route component={NoMatch}/> */}
    </Routes>
  </Router>
);

// const Private = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     localStorage.getItem('login_token') ? (
//       <Redirect to={{
//         pathname: '/',
//         state: { from: props.location }
//       }}/>
//     ) : (
//       <Component {...props}/>
//     )
//   )}/>
// )

// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     !localStorage.getItem('login_token') ? (
//       <Redirect to={{
//         pathname: '/',
//         state: { from: props.location }
//       }}/>
//     ) : (
//       <Component {...props}/>
//     )
//   )}/>
// )

// const PrivateRoute = withRouter(Private);


export default AppRouter;
