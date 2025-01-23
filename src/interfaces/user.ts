import { User as FirebaseUser } from 'firebase/auth';

export interface User extends FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
