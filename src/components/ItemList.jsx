import { Item } from './Item';

export default function ItemList({ source }) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row -mx-2">
      {!!source?.length &&
        source.map((data, index) => (
          <Item key={index} data={data} className="p-4 basis-full md:basis-3/6 lg:basis-2/6" />
        ))}
      {!source?.length && <h2 className="px-6 text-xl text-center">Your search did not match any missions.</h2>}
    </div>
  );
}
