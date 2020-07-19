export interface IMapper<I, O> {
  map(input: I): O;
}
