import { Component } from 'react';
import EdamamService from '../services/EdamamService';
import Spinner from '../components/Spinner/Spinner';
import ErrorRobot from '../assets/img/error_robot.png';

export default function withLoadingAndError(MyComponent) {
  return class extends Component {
    edamamService = new EdamamService();

    constructor(props) {
      super(props);
      this.state = {
        isLoаding: true,
        data: null,
        error: null,
      };
    }

    componentDidMount() {
      try {
        this.edamamService.getCards()
          .then((data) => {
            this.setState({
              data,
              isLoаding: false,
            });
          });
      } catch (error) {
        this.setState({
          error,
          isLoаding: false,
        });
      } 
    }

    render() {
      const { data, isLoаding, error } = this.state;
      if (isLoаding) {
        return <Spinner />;
      }
      
      if (error) {
        console.log('Error', error);
        return <ErrorRobot />;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <MyComponent {...this.props} data={data} />; 
    }
  };
}
