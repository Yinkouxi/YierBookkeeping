export type Tag = {
  id: number
  user_id: number
  name: string
  sign: string
  deleted_at: null
  kind: 'expenses'|'income'
}

export type Resources<T=any>={
  resources:T[]
  pager:{
    page:number
    per_page:number
    count:number
  }
}

export type Item = {
  id: number;
  user_id: number;
  amount: number;
  tag_ids: number[];
  tags?: Tag[],
  happen_at: string;
  kind: 'expenses' | 'income';
};

// type Resource<T> = {
//   resource: T;
// };