import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Numerical Method</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Root of Equation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/Graphical">Graphical Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/Bisection">Bisection Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/FalseP">False-Position Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/OneP">One-Point Iteration Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/Newt">Newton raphson Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/RootofEq/Secant">Secant method</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Linear Algeabra
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/LinearAl/Cramer">Cramer's Rule</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Gauss Elimination Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Gauss Jordan Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS"> LU Decomposition Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Cholesky Decomposition Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Conjugate Gradient Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Jacobi Iteration Method</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Guass-Seidel Iteration Method</NavLink>
                  </NavItem>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Interpolation and Extrapolation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Newton's divided-difference</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Lagrange polynmials</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/CS">Spline Iteration</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Least-Squares Regression
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                    <NavItem>
                      <NavLink href="/CS">Linear Regression</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/CS">Polynimail Regression</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/CS">Multiple Regression</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Integration
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                    <NavItem>
                      <NavLink href="/IntegrateTech/ComposTrap">Composite Trapzoidal Rule</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/IntegrateTech/ComposSim">Composite Simpson's Rule</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Differention
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/forwardh">Forward divided-Difference (order h)</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/forwardh">Forward divided-Difference (order o(h))</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/Backwardh">Backward divided-Difference (order h)</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/Backwardh2">Backward divided-Difference (order O(h))</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/Centralh">Central divided-Difference (order h)</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                      <NavLink href="/Difference/Centralh2">Centraldivided-Difference (order O(h))</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
