"use client";
import Image from 'next/image';

const steps = [
    {
        title: 'BƯỚC 1',
        description: 'Đăng ký dịch vụ chụp ảnh cưới bằng cách điền thông tin vào form bên dưới.',
        imageSrc: '/images/step1.png', // Update with actual image paths
        altText: 'Bước 1'
    },
    {
        title: 'BƯỚC 2',
        description: 'Đến trực tiếp studio để xem sản phẩm, chọn ngày chụp, ký hợp đồng và chọn ngày thử trang phục.',
        imageSrc: '/images/step2.png',
        altText: 'Bước 2'
    },
    {
        title: 'BƯỚC 3',
        description: 'Trang điểm & chụp ảnh cưới, quay video cưới và chọn ảnh sau khi chụp.',
        imageSrc: '/images/step3.png',
        altText: 'Bước 3'
    },
    {
        title: 'BƯỚC 4',
        description: 'Nhận file ảnh đã chỉnh sửa & duyệt in album để nhận sản phẩm cuối cùng.',
        imageSrc: '/images/step4.png',
        altText: 'Bước 4'
    }
];

export default function Features() {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">CHỤP ẢNH CƯỚI TẠI TONY WEDDING NHƯ THẾ
                NÀO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {steps.map((step, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                        <p>{step.description}</p>
                        <div className="mt-4">
                            <Image
                                src={step.imageSrc}
                                alt={step.altText}
                                width={250}
                                height={250}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


// import React, { useEffect, useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
// import { Service } from "@/types/service";
// import axios from "axios";
// import { ContentState, convertFromRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// export interface CardToMapService {
//   category: string,
//   title: string,
//   src: string,
//   content: React.JSX.Element,
//   description: string,
// }

// export function Features() {
//   const [services, setServices] = useState<Service[]>([]);
//   const [cards_, setCards] = useState<CardToMapService[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://localhost:7192/service-management/services');
//         const services: Service[] = response.data.results;

//         setServices(services);

//         const cardToMapServices = services.map(service => {
//           let contentState;

//           try {
//             // Attempt to parse description as JSON
//             contentState = service.description 
//               ? convertFromRaw(JSON.parse(service.description)) 
//               : ContentState.createFromText('');
//           } catch (error) {
//             // Fallback to plain text if description is not valid JSON
//             contentState = ContentState.createFromText(service.description || '');
//           }

//           // Create editor state for each service
//           const editorState = EditorState.createWithContent(contentState);

//           return {
//             category: service.type || '',
//             title: service.title || '',
//             src: service.src || '',
//             content: (
//               <div>
//                 <Editor
//                   editorState={editorState}
//                   readOnly={true}
//                   toolbarHidden
//                 />
//               </div>
//             ),
//             description: service.description || ''
//           } as CardToMapService;
//         });

//         setCards(cardToMapServices);

//       } catch (error) {
//         console.error('Failed to fetch services:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   const cards = cards_.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Hãy đến với các dịch vụ của chúng tôi.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }
