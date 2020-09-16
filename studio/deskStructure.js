import S from "@sanity/desk-tool/structure-builder";

import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Sidor")
        .child(
          S.list()
            .title("Sidor")
            .items([
              S.listItem()
                .title("Startsida")
                .child(S.editor().schemaType("home").documentId("home")),
              S.listItem()
                .title("Aktiviteter")
                .child(
                  S.editor().schemaType("activities").documentId("activities")
                ),
              S.listItem()
                .title("Scenen")
                .child(S.editor().schemaType("stage").documentId("stage")),
              S.listItem()
                .title("Hitta hit")
                .child(
                  S.editor().schemaType("directions").documentId("directions")
                ),
              S.listItem()
                .title("Catering")
                .child(
                  S.editor().schemaType("catering").documentId("catering")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Evenemang")
        .schemaType("eventList")
        .child(S.documentTypeList("eventList").title("Evenemang")),
      S.listItem()
        .title("Inställningar")
        .child(S.editor().schemaType("settings").documentId("settings"))
        .icon(MdSettings),
      // ...S.documentTypeListItems(),
    ]);
