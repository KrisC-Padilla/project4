
import App from './App';

export const reducer = (state, action) => {
   switch (action.type) {
      case 'buy':
         return {
            ...state,
            item: state.item.map((item) => {
               if (item.name === action.payload.name) {
                  item.status = 'Bought';
               }
               return item;
            }),
         };
      case 'DELETE':
         return {
            ...state,
            item: state.item.filter(
               (item) => item.name !== action.payload.name
            ),
         };

      case 'ADD':
         return { ...state, item: [...state.item, action.payload] };
      default:
         return state;
   }
};

