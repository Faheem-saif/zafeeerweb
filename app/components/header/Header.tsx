import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

import Link from 'next/link';


export default function Header() {
  return (
    <Navbar className="bg-[#F8F9FB]" fluid rounded>
      <Link href={"/"}>
        <img src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Logo.png?alt=media&token=90e4c980-ca35-4776-b816-18a9130ec719" className="mr-3 h-6 sm:h-9" alt="MyuniPixel Logo" />
      </Link>

      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse className='  md:me-[10%]' >
        <NavbarLink className='mt-2 hover:text-inherit hover:text-blue-700'>
          <div className='hover:text-blue-700'>
            <Dropdown label="Services" className='hover:text-blue-700' inline>
              <Link href={"/services/graphicDesign"}><DropdownItem>Graphic Design</DropdownItem></Link>
              <DropdownDivider />
              <Link href={"/services/webDevelopment"}><DropdownItem>Website Development</DropdownItem></Link>
              <DropdownDivider />
              <Link href={"/services/videoEditing"}><DropdownItem>Video Editing</DropdownItem></Link>
              <DropdownDivider />
              <Link href={"/services/seo"}><DropdownItem>SEO</DropdownItem></Link>
              <DropdownDivider />
              <Link href={"/services/contantWriting"}><DropdownItem>Content Writing</DropdownItem></Link>
              <DropdownDivider />
              <Link href={"/taskDetails/customTask"}><DropdownItem>Custom Tasks</DropdownItem></Link>
              <DropdownDivider />
            </Dropdown>
          </div>


        </NavbarLink>
        <Link className='p-2 mx-0 hover:text-blue-700 ' href={"/portfolio"}>Portfolio</Link>
        <div className="md:hidden">
          <DropdownMenuSeparator />
        </div>
        <Link className=' p-2 hover:text-blue-700' href={"/blogs"}>Blogs</Link>
        <DropdownMenuSeparator />


      </NavbarCollapse>
    </Navbar>
  );
}
