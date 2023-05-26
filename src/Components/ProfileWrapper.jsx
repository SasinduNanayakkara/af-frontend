import React, { useState, useEffect } from "react";
import Dante from "Dante2";
import Profile from "../Assets/Profile.svg";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const onChangeHandler = (editor) => {
  console.log(editor.emitSerializedOutput());
};

const contents = {
  blocks: [
    {
      key: "2lbgc",
      text: "Dante 3 - This is it!",
      type: "header-one",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 21,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "b75su",
      text: "Just another medium clone built on top of TipTap",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 48,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "nhvv",
      text: "Dante3 is a Tiptap port of Dante2 (Draftjs) . This version is built on top of TipTap and reaches all Dante2's features with a shiny ultra mega super uber maintainable architecture.",
      type: "blockquote",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "2n86t",
      text: "See the demo at: dante-editor.dev",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "f2937",
      text: "Why rewrite a new version of Dante?",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 35,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "9anog",
      text: "The previous version (Dante2) was made on DraftJs, that's a facebook library to build WYSIWYG editor, I'd choose that technology because it implemented a very interesting data model and abstracted many parts of the heuristics implementation that Dante1 (the previous version) built as a naive implementation relying a lot on DOM manipulation, So Dante2 was great and is working on a ton of production websites. Sadly over the last years this library has not received much attention from maintainers. Among the ~700 unattended reported issues there are some that have become a deal breaker for me:",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "2kgbs",
      text: "Bad mobile support.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "144a3",
      text: "~1MB added to your bundle (immutablejs is heavy)",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "1b6no",
      text: "Not created for realtime collab.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "7411s",
      text: "My bet, ProseMirror/TipTap",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 26,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "bmd9n",
      text: "After shopping many editors libraries, I mean after tried to implement Dante on almost all of them (Trix, Editorjs, Quilljs, Slate, Prosemirror) I've choosen TipTap library (which is based on Prosemirror library)., I guess all editors libraries have their own flaws but after review it all TipTap is the best of it's class, very well designed/architectured, and I love the community around their ecosystem. So that's it.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 99,
          length: 45,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "btvrk",
      text: "Features:",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 9,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "eeicj",
      text: "Configurable and extensible extensions / plugins / components",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "2q322",
      text: "Undo/redo.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "eell6",
      text: "Save Content as a data JSON/HTML structure.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "3n617",
      text: "Load Content as a data JSON/HTML structure.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "42udb",
      text: "Styled components Theme support (built in light/dark themes).",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "4ug08",
      text: "Block based content:",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 19,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "dtmcf",
      text: "Dante editor can be extended with (React) components to, currently there are default components to be used as is:",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "1dh5l",
      text: "Image upload for paste html.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "6nlro",
      text: "Video embed.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "bf5g5",
      text: "Video Recorder.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "7cdn3",
      text: "Embed.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "6ggsv",
      text: "Divider.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "1om90",
      text: "Speech.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "5rrhs",
      text: "Giphy.",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "ban7n",
      text: "Installation",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 12,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "8j8r0",
      text: "npm install dante3 or yarn add dante3",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 18,
          style: "CODE",
        },
        {
          offset: 22,
          length: 15,
          style: "CODE",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "7vcvc",
      text: "Usage",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 5,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "8o094",
      text: "Component Based",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "4u6m1",
      text: "<DanteEditor\\n  content={'hello world'}\\n/>",
      type: "code-block",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 43,
          style: "CODE",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "1h57r",
      text: "Options:",
      type: "header-three",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 8,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "2rlu2",
      text: "Many configuration options and plugin usage can be found on the documentation page:",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "egmsd",
      text: "See dante-editor.dev",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "46oid",
      text: "Development",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 11,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "evums",
      text: "Installation",
      type: "header-three",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 12,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "674o9",
      text: "git clone https://github.com/michelson/dante",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 44,
          style: "CODE",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "1021r",
      text: "dependencies",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 12,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "al1vh",
      text: "npm install or yarn install",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 11,
          style: "CODE",
        },
        {
          offset: 15,
          length: 12,
          style: "CODE",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "cuuu2",
      text: "Building",
      type: "header-three",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 8,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "eg87j",
      text: "npm dante3_build or yarn dante3_build",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 16,
          style: "CODE",
        },
        {
          offset: 20,
          length: 17,
          style: "CODE",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "1rqu2",
      text: "dev install:",
      type: "header-three",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 12,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "dlso2",
      text: "lerna bootstrap",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "fbpee",
      text: "yarn dev",
      type: "unordered-list-item",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "auo95",
      text: "Status",
      type: "header-two",
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 0,
          length: 6,
          style: "BOLD",
        },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "2bavi",
      text: "Dante3 is on beta, actively maintained, with all the features that Dante2 has. As is relying in Prosemirror/TipTap this has better browser support and mobile support. Also has realtime collab capabilities.",
      type: "blockquote",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

function ProfileWrapper({
  profilePic,
  name,
  specilization,
  locationimg,
  location,
}) {
  const [isSaveeModalOpen, setisSaveeModalOpen] = useState(false);
  const [isDiscardModalOpen, setisDiscardModalOpen] = useState(false);

  const openSaveModal = () => {
    setisSaveeModalOpen(true);
  };

  const openDiscardeModal = () => {
    setisDiscardModalOpen(true);
  };

  const closeSaveModal = () => {
    setisSaveeModalOpen(false);
  };

  const closeDiscardeModal = () => {
    setisDiscardModalOpen(false);
  };

  const confirmDiscardeModal = () => {
    setisDiscardModalOpen(false);
    // send save REST
  };

  const confirmPublishModal = () => {
    setisSaveeModalOpen(false);
    // send save REST
  };

  return (
    <div>
      <div className=" flex-col px-5 w-full">
        <div className="flex flex-row">
          <div className="w-1/9">
            <img
              src={profilePic ? profilePic : Profile}
              alt="Profile"
              className="w-24 h-24 mt-7"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mt-10 ml-8 text-xl mb-3">{name}</h4>
            <h6 className="text-[18px] ml-8 mb-3 text-[#858585] font-semibold">
              {specilization}
            </h6>

          </div>
          <div className="flex flex-col">

          </div>
        </div>
        <div className="flex">
              <div className="w-28 flex justify-end ml-[850px] mr-20">
                <button
                  type="submit"
                  className="bg-[#BABABA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={openDiscardeModal}
                >
                  Discard
                </button>
                <Modal
                  isOpen={isDiscardModalOpen}
                  onRequestClose={closeDiscardeModal}
                  style={{
                    content: {
                      height: "240px", // Set the desired height
                      width: "30rem", // Set the desired width
                      top: "50%", // Center vertically
                      left: "50%", // Center horizontally
                      transform: "translate(-50%, -50%)", // Center using translate
                    },
                  }}
                >
                  <div className="w-2/2 ml-10">
                    <div className="flex justify-end">
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-500 cursor-pointer"
                        onClick={closeDiscardeModal}
                      />
                    </div>
                    {/* Rest of the modal content */}
                  </div>
                  <h2 className="flex justify-center font-bold text-3xl mb-4">
                    Are you sure?
                  </h2>
                  <p className="font-normal ml-6">
                    Are you sure you want to discard this content? This process
                    cannot be undone.
                  </p>
                  <div className="w-28 flex justify-center mt-5 ml-64">
                    <button
                      type="submit"
                      className="bg-[#FF1F00] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                      onClick={confirmDiscardeModal}
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                      onClick={closeDiscardeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>

                <button
                  type="submit"
                  className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={openSaveModal}
                >
                  Publish
                </button>
                <Modal
                  isOpen={isSaveeModalOpen}
                  onRequestClose={closeSaveModal}
                  style={{
                    content: {
                      height: "240px", // Set the desired height
                      width: "30rem", // Set the desired width
                      top: "50%", // Center vertically
                      left: "50%", // Center horizontally
                      transform: "translate(-50%, -50%)", // Center using translate
                    },
                  }}
                >
                  <div className="w-2/2 ml-10 z-50">
                    <div className="flex justify-end">
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-500 cursor-pointer"
                        onClick={closeSaveModal}
                      />
                    </div>
                    {/* Rest of the modal content */}
                  </div>
                  <h2 className="flex justify-center font-bold text-3xl mb-4">
                    Are you sure?
                  </h2>
                  <p className="font-normal ml-6">
                    Are you sure you want to publish this content? This process
                    cannot be undone.
                  </p>
                  <div className="w-28 flex justify-center mt-5 ml-64">
                    <button
                      type="submit"
                      className="bg-[#000000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                      onClick={confirmPublishModal}
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                      onClick={closeSaveModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
      </div>
      <div className="mx-12 mt-12 editorContainer relative">
        <Dante onChange={onChangeHandler} content={contents} />
      </div>
    </div>
  );
}

export default ProfileWrapper;
