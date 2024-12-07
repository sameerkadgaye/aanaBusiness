import React, { useState } from "react";
import "./style.css";
import { Tree, TreeNode } from "react-organizational-chart";
import { FaAtom } from "react-icons/fa";

const CompanyTree = () => {
  const [isChildVisible, setIsChildVisible] = useState(false);

  const toggleChildVisibility = () => {
    setIsChildVisible((prev) => !prev);
  };

  return (
    <div className="mar">
      <div className="container h-100 w-100 toggle1 mt-3">
        <div className="p-3">
          <h4>Company Tree</h4>
          <div className="mt-4">
            <div className="row mb-5">
              <div className="col-sm-3">
                <div class="card bg-warning mb-3 text-white p-2">
                  <div class="card-body">
                    <h4>Money Plant</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card mb-3 bg-primary text-white p-2">
                  <div class="card-body">
                    <h4>Golden Category</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card text-white mb-3 p-2 bg1">
                  <div class="card-body">
                    <h4>Platinum Category</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div class="card bg2 text-white mb-3 p-2">
                  <div class="card-body">
                    <h4>General Category</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 h-100 w-100 toggle1 border-top overflow-auto">
        <div class="d-inline-block p-3" style={{ width: "110%" }}>
          <div className="mt-5">
            <Tree
              label={
                <div>
                  <FaAtom className="text-primary custom-icon-size" />
                  <p>Aana Business</p>
                </div>
              }
            >
              <TreeNode
                label={
                  <div>
                    <FaAtom
                      className="text-primary custom-icon-size"
                      onClick={toggleChildVisibility}
                    />

                    <p>Demo 1</p>
                  </div>
                }
              >
                {/* <TreeNode label={<div></div>} /> */}
                {isChildVisible && (
                  <TreeNode
                    label={
                      <div>
                        <FaAtom className="text-primary custom-icon-size" />
                        <div>
                          <p>Demo 11</p>
                        </div>
                      </div>
                    }
                  />
                )}
                {isChildVisible && (
                  <TreeNode
                    label={
                      <div>
                        <FaAtom className="text-primary custom-icon-size" />
                        <div>
                          <p>Demo 11</p>
                        </div>
                      </div>
                    }
                  />
                )}
                <TreeNode
                  label={
                    <div>
                      {/* <FaAtom className="text-primary custom-icon-size" />
                      <p>Demo</p> */}
                    </div>
                  }
                />
              </TreeNode>

              <TreeNode
                label={
                  <div>
                    <FaAtom className="text-primary custom-icon-size" />
                    <p>Demo</p>
                  </div>
                }
              />
              <TreeNode
                label={
                  <div>
                    <FaAtom className="text-primary custom-icon-size" />
                    <p>Demo</p>
                  </div>
                }
              />
              <TreeNode
                label={
                  <div>
                    <FaAtom className="text-success custom-icon-size" />
                    <p>Demo</p>
                  </div>
                }
              />
            </Tree>
          </div>

          {/* <h1>This is a wide content with a scrollbar at the bottom</h1> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyTree;
