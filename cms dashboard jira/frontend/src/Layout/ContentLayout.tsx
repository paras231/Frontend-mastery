import { useState } from "react";
import Header from "./Header";
import ProjectLists from "../Components/Lists/ProjectLists";

const ContentLayout = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleSelect = (idx: number) => {
    setSelectedItem(idx);
  };
  console.log(selectedItem);

  return (
    <>
      <div className="pl-6 ml-80">
        <Header selectedItem={selectedItem} handleSelect={handleSelect} />
        {selectedItem === 0 ? (
          <ProjectLists />
        ) : (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ad
            illum a porro suscipit unde accusantium, accusamus quasi saepe earum
            corporis dicta in voluptatem amet ullam doloremque fugit cumque
            repellat optio rerum atque sit? Excepturi, quasi rem consequatur
            voluptate, exercitationem nesciunt pariatur quas et dignissimos id
            odit magnam facilis suscipit. Unde totam, porro quis fugiat fugit
            laudantium ducimus voluptas distinctio ipsam ratione et similique
            inventore, ex quam quisquam, voluptatibus alias incidunt repellendus
            tenetur dolor optio libero? Quos ipsum, libero commodi neque laborum
            pariatur saepe dicta et dolor, ut rem quibusdam. Vitae, vel rem
            libero, dicta dolor est consectetur id, tempore corrupti magni
            minima. Laboriosam fugit quisquam deleniti doloribus magnam magni
            unde tempore maiores necessitatibus maxime, facilis veniam
            praesentium exercitationem autem corrupti fuga perferendis tempora
            quae temporibus, ex voluptatem cupiditate pariatur hic? Dolor modi
            minus distinctio perspiciatis velit quis in quas nemo molestias
            autem inventore debitis qui, praesentium dolorum accusantium
            architecto nihil et eos? Quisquam explicabo voluptates doloribus
            impedit ut, beatae culpa excepturi mollitia sed! Officiis illum
            necessitatibus itaque deserunt voluptates explicabo saepe unde,
            iusto harum obcaecati commodi enim illo reprehenderit eos libero
            quod repellat et dolorem placeat similique dolor voluptatem quis
            nihil iure. Officiis, ipsum iste. Sit eos esse veritatis ducimus
            harum maiores eum possimus fugiat sunt, optio eaque accusamus
            asperiores exercitationem quibusdam ex molestiae blanditiis qui
            dicta totam assumenda deleniti laborum, quam ut. Quam blanditiis
            sapiente, ipsa adipisci dicta suscipit vero nam, fugiat ab
            voluptates reiciendis voluptatibus ut laboriosam tenetur odit sit
            asperiores similique exercitationem temporibus. Quas mollitia in
            ipsam quidem, dolores a obcaecati, facilis culpa molestiae cumque
            dignissimos dolorum. Nisi quidem natus et possimus, dolore ex
            sapiente autem explicabo nesciunt voluptas. Sint odit expedita
            eveniet veritatis ea vero ullam recusandae fugiat dignissimos
            similique consequuntur suscipit deserunt temporibus ad beatae a, aut
            voluptates quas dolore harum provident veniam. Ex asperiores dolor
            corrupti nisi cumque et placeat, repellat consequatur nostrum, aut
            itaque quisquam minima, modi assumenda deserunt sint consequuntur
            qui! Cupiditate veritatis consequatur reprehenderit sunt accusantium
            ea at magnam animi fugiat, rem sequi aliquam earum quam esse
            obcaecati sit, soluta similique tempora, repudiandae non ullam ad!
            Laborum optio voluptas, cumque mollitia vitae, eligendi quidem
            voluptatibus autem id similique aut dolore quis dolorum in quod
            aspernatur amet nisi illo nobis vero debitis? Perspiciatis et
            similique, fugit, quas quaerat eligendi molestias quia quidem nihil
            possimus, sed totam architecto? Obcaecati, dignissimos aliquam quas
            dolore suscipit, cumque blanditiis autem, quos officia inventore
            quisquam dolores.
          </div>
        )}
      </div>
    </>
  );
};

export default ContentLayout;
