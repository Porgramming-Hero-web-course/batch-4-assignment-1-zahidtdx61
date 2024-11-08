{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial = {
    [T in keyof Profile]?: Profile[T];
  };

  const updateProfile = (myProfile: Profile, updates: Partial): Profile => {
    const newProfile: Profile = {
      ...myProfile,
      ...updates,
    };

    return newProfile;
  };
}
