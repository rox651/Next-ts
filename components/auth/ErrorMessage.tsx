const ErrorMessage = ({ children = "" }: { children: string | undefined}) => {
   return <span className="text-red-600 my-2">{children}</span>;
};

export default ErrorMessage;
