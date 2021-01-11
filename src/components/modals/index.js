import ReactDom from 'react-dom';

const Modal = ({
	children, open, close, title,
}) => ReactDom.createPortal(
	<>
		{open === true
		&& <div className="z-50 w-full h-screen bg-background fixed top-0 left-0">
				<div className="w-full, h-screen flex flex-col justify-center items-center">
					<div className="w-full, h-16 flex items-end justify-end" >
						<div className="h-full w-full flex justify-center items-center ">
							<h1 className=" text-6xl font-thin text-main absolute top-4">{title}</h1>
							<button className="fixed  top-4 right-8" onClick={close}>
								<h1 className="text-2xl text-text">X</h1>
							</button>
						</div>
					</div>
					{children}
				</div>
		</div>
		}
	</>,
	document.getElementById('modal'),
);

export default Modal;