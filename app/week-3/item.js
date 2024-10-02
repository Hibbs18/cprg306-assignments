export default function Item({name, quantity, category}) {
    return (
        <li className="p-2 bg-teal-900 w-80 mt-2 text-center h-fit rounded">
            {name} - {quantity} - {category}
        </li>
    );
}