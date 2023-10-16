// import { StaticRequire } from "../node_modules/next/dist/shared/lib/get-img-props";

// class LoginStore{
//      /**
//      * @type {State} A reference to the current state of the Context.
//      */
//     private state: State;

//     constructor(state: State) {
//       this.state = state;
//       console.log(`Context: Transition to ${(<any>state).constructor.name}.`);       
//       this.state.setContext(this);
//     }
    
//     /**
//      * The Context delegates part of its behavior to the current State object.
//      */
//     public login(): void {
//         this.state.login();
//     }

//     public logout(): void {
//         this.state.logout();
//     }

//     public getUser(): void {
//       this.state.getUser();
//   }
// }


// abstract class State {
//   protected context: LoginStore = new LoginStore();

//   public setContext(context: LoginStore) {
//       this.context = context;
//   }

//   public abstract login(): void;

//   public abstract logout(): void;

//   public abstract getUser(): void;
// }

// class UserLoggedInState extends State{
//   public LogIn
// }