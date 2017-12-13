import { StackNavigator } from 'react-navigation';
import GameScreen from './GameScreen';
import OptionScreen from './OptionScreen';

const App = StackNavigator({
  Game: { screen: GameScreen },
  Options: { screen: OptionScreen }
});

export default App;