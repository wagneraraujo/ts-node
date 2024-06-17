type Address = {
  street: string;
  number: number;
};

type User = {
  name?: string;
  age: number;
  address: Address;
};

type UserProperties = keyof User;

function pickProperty(user: User, property: UserProperties) {
  return user[property];
}

const usuario: User = {
  name: "Wagner",
  age: 20,
  address: {
    street: "Rua teste",
    number: 23234,
  },
};

type PickProperyReturnType = ReturnType<typeof pickProperty>;

type UserWithoutAddress = Omit<User, "name" | "address">;

type UserNameAndAge = Pick<User, "name" | "age">;

type UserPartial = Partial<User>; //todos opcionais

console.log(pickProperty(usuario, "name"));
