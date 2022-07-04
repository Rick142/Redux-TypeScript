//Объединение Action - creator в одни объект
import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}

