interface IHeads {
  firstName: string;
  lastName: string;
  id: string;
}

interface ITraits {
  id: string;
  name: string;
}

export interface IHouses {
  animal: string;
  commonRoom: string;
  element: string;
  founder: string;
  ghost: string;
  heads: IHeads[];
  houseColours: string;
  id: string;
  name: string;
  traits: ITraits[];
}
